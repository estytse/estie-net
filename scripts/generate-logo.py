#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["google-genai", "pillow"]
# ///
"""Generate logo for estie.net"""

import os
import sys
from pathlib import Path

# Setup API key
env_file = Path("/Users/esty/Documents/Obsidian/Ideaverse Zero 2/x/Context/.env")
if env_file.exists():
    with open(env_file) as f:
        for line in f:
            if line.startswith('GOOGLE_API_KEY='):
                os.environ['GOOGLE_API_KEY'] = line.split('=', 1)[1].strip()

api_key = os.environ.get('GOOGLE_API_KEY')
if not api_key:
    print("Set GOOGLE_API_KEY")
    sys.exit(1)

from google import genai
from google.genai import types

client = genai.Client(api_key=api_key)

OUTPUT_DIR = Path("/Users/esty/Projects/estie-net/public")

PROMPT = """Create a minimalist logo for a tech company called "estie.net"

DESIGN:
- The text "estie.net" in lowercase
- Clean, modern geometric sans-serif font (similar to Inter, Manrope, or Outfit)
- The dot/period between "estie" and "net" is a teal circle (#14b8a6), slightly larger than it would normally be
- The rest of the text is dark charcoal/slate (#1e293b)
- The teal dot acts as a visual anchor and connection point

STYLE:
- Ultra minimalist, 2025 tech startup aesthetic
- Clean white background
- Professional but approachable
- The teal dot should feel intentional, like a design element not just punctuation

TECHNICAL:
- Horizontal layout, centered in frame
- High contrast for readability at small sizes
- No taglines, icons, or extra elements
- Just the wordmark with the teal dot

DO NOT INCLUDE:
- Any icons or symbols other than the text
- Gradients or shadows
- Multiple colors beyond teal and dark gray
- Decorative elements
"""

print("Generating logo...")

response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents=PROMPT,
    config=types.GenerateContentConfig(
        image_config=types.ImageConfig(
            aspect_ratio="16:9",
            image_size="2K"
        )
    )
)

image_parts = [part for part in response.parts if part.inline_data]

if image_parts:
    image = image_parts[0].as_image()
    output_path = OUTPUT_DIR / "logo.png"
    image.save(str(output_path))
    print(f"Saved: {output_path}")
else:
    text_parts = [part for part in response.parts if hasattr(part, 'text') and part.text]
    if text_parts:
        print(f"Model response: {text_parts[0].text[:300]}")
    else:
        print("Failed to generate")
        sys.exit(1)
