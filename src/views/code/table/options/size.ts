/** @format */

export const sizeCol = `[
        {
          "title": "Name",
          "dataIndex": "name",
          "width": "100",
          "fixed": "left"
        },
        {
          "title": "Other",
          "children": [
            {
              "title": "Age",
              "dataIndex": "age",
              "width": "200"
            },
            {
              "title": "Address",
              "children": [
                {
                  "title": "Street",
                  "dataIndex": "street",
                  "width": "200"
                },
                {
                  "title": "Block",
                  "children": [
                    {
                      "title": "Building",
                      "dataIndex": "building",
                      "width": "100"
                    },
                    {
                      "title": "Door No.",
                      "dataIndex": "number",
                      "width": "100"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Company",
          "children": [
            {
              "title": "Company Address",
              "dataIndex": "companyAddress",
              "width": "200"
            },
            {
              "title": "Company Name",
              "dataIndex": "companyName"
            }
          ]
        },
        {
          "title": "Gender",
          "dataIndex": "gender",
          "width": "80",
          "fixed": "right"
        }
      ]`;

export const sizeColArray = JSON.parse(sizeCol);

let data = '[';
for (let i = 0; i < 20; i++) {
  data += `{
          "name": "John Brown",
          "age": "${i} + 1",
          "street": "Lake Park",
          "building": "C",
          "number": "2035",
          "companyAddress": "Lake Street 42",
          "companyName": "SoftLake Co",
          "gender": "M"
        }${i === 19 ? '' : ','}
      `;
}

data += ']';

export const sizeOptions = data;

export const sizeOptionsArray = JSON.parse(sizeOptions);
