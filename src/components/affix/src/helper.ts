/** @format */

import addDOMEventListener from 'add-dom-event-listener';

interface ObserverEntity {
  target: HTMLElement | Window | null;
  eventList: Function[];
  eventHandler: {
    [eventName: string]: any;
  };
}

export const OBSERVED_EVENT = ['scroll', 'resize'];

const observers: ObserverEntity[] = [];

export const addObserved = (
  target: HTMLElement | Window | null,
  updatePostion: Function,
): void => {
  if (!target) {
    return;
  }

  let entity: ObserverEntity | undefined = observers.find(
    (item) => item.target === target,
  );
  // 如果一个页面存在多个 target 一样的，就存起来一起触发
  if (entity) {
    entity.eventList.push(updatePostion);
  }
  if (!entity) {
    entity = {
      target,
      eventList: [updatePostion],
      eventHandler: {},
    };
    observers.push(entity);

    OBSERVED_EVENT.forEach((eventName) => {
      entity!.eventHandler[eventName] = addDOMEventListener(
        target,
        eventName,
        (event: Event) => {
          entity!.eventList.forEach((eventItem) => {
            eventItem(event);
          });
        },
      );
    });
  }
}; // end addObserved

export const removeObserved = (target: HTMLElement | Window | null): void => {
  const entity: ObserverEntity | undefined = observers.find(
    (item) => item.target === target,
  );
  const entityIndex: number | undefined = observers.findIndex(
    (item) => item.target === target,
  );
  if (entity) {
    Object.keys(entity.eventHandler).forEach((eventName) => {
      const handler = entity!.eventHandler[eventName];
      if (handler && handler.remove) {
        handler.remove();
      }
    });
    observers.splice(entityIndex, 1);
  }
};
