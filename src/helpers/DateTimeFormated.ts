import dayjs from "dayjs";

const FormateDateTime = (time: any) => {
  const oldTime = new Date(time); // Replace this with your date
  const formateDateTime = dayjs(oldTime).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  return formateDateTime;
};

export default FormateDateTime;
