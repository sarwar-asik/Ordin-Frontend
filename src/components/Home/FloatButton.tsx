// "use client";

// import React, { useState } from 'react';
// import { FloatButton, Switch } from "antd";
// import {
//   CommentOutlined,
//   CustomerServiceOutlined,
//   QuestionCircleOutlined,
// } from "@ant-design/icons";



// const FloatButton = () => {
//     const [open, setOpen] = useState(true);

//     const onChange = (checked: boolean) => {
//       setOpen(checked);
//     };
//     return (
//         <FloatButton.Group
//         trigger="click"
//         type="primary"
//         style={{ right: 24 }}
//         icon={<CommentOutlined />}
//       >
//         <FloatButton icon={<CustomerServiceOutlined />} />

//         <FloatButton
//           badge={{ count: 12 }}
//           icon={<QuestionCircleOutlined />}
//         />
//         <FloatButton icon={<CommentOutlined />} />
//       </FloatButton.Group>
//     );
// };

// export default FloatButton;