from PIL import Image
import numpy as np

def remove_background(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Simple thresholding: if the sum of R, G, B is low, make it transparent
    # The logo has neon blue/purple, so the pixels should have significant values
    # Let's say if max(R,G,B) < 50, make it transparent
    
    rgb = data[:, :, :3]
    alpha = data[:, :, 3]
    
    # Find dark pixels
    # Using max(rgb) < threshold to identify "dark"
    threshold = 50
    mask = np.max(rgb, axis=2) < threshold
    
    data[mask, 3] = 0
    
    new_img = Image.fromarray(data)
    new_img.save(output_path)

if __name__ == "__main__":
    remove_background("d:/Projects-2/Portfolio website in Borhan Kabir/footer-logo.png", "d:/Projects-2/Portfolio website in Borhan Kabir/footer-logo-transparent.png")
