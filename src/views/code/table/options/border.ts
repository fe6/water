export const borderCol = `[{
        "title": "Name",
        "dataIndex": "name",
        "width": "100px"
      }, {
        "title": "Age",
        "dataIndex": "age",
        "width": "100px"
      }, {
        "title": "Address",
        "dataIndex": "address"
      }, {
        "title": "Tags",
        "dataIndex": "tags",
        "width": "100px"
      }, {
        "title": "Action",
        "dataIndex": "action",
        "width": "30px"
      }]`;

export const borderOptions = `[{
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: "cool",
        action: "delete"
      }, {
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: "good",
        action: "add"
      }, {
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: "红星",
        action: "delete"
      }]`;

export const header = (creatElement: Function) => creatElement('div', 'header');

export const footer = (creatElement: Function) => creatElement('div', 'footer');
