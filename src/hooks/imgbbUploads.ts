const url = `https://api.imgbb.com/1/upload?key=a50f3571eea0f08e932e0a8e13295351`;

const uploadImgBB = async (img: any) => {
  const formData = new FormData();
  formData.append("image", img);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.data.display_url;
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (error) {
    console.error("Error in uploadImgBB:", error);
    throw error;
  }
};

export default uploadImgBB;
