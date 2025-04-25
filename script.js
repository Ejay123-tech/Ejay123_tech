async function uploadImage() {
    const fileInput = document.getElementById("leafImage");
    const resultElement = document.getElementById("result");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("data", file);
  
    resultElement.innerText = "Processing...";
  
    const response = await fetch("https://yourname-hf.space/run/predict", {
      method: "POST",
      body: formData
    });
  
    const result = await response.json();
    resultElement.innerText = result.data[0]; // based on Gradio output
  }
  