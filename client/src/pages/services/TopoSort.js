// This should be given all the values to call topo sort

import { replace } from "formik";
export const CallTopoSort = (values) => {
  console.log(values);
  // console.log(JSON.stringify(values, replacer));
  fetch("http://localhost:5000/api/topoSort", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      adj: Array.from(values.dependencies.entries()),
      projectid: values.projectid,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data != null) {
        // console.log(data);
      }
    });
};
