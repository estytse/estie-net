#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["google-genai", "pillow"]
# ///
"""Generate 3 background images for estie.net sections"""

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
    print("Set GOOGLE_API_KEY in x/Context/.env")
    sys.exit(1)

from google import genai
from google.genai import types

client = genai.Client(api_key=api_key)

OUTPUT_DIR = Path("/Users/esty/Projects/estie-net/public/backgrounds")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Background definitions
BACKGROUNDS = [
    {
        "name": "hero-bg.png",
        "prompt": """Create an abstract background image for a website hero section.

STYLE:
- Dark slate/charcoal base color (similar to #1e293b)
- Subtle flowing organic shapes in slightly lighter tones
- Soft gradient waves moving diagonally across the image
- Very subtle, low contrast - this goes BEHIND text
- No bright colors, no sharp edges
- Ethereal, professional, modern tech aesthetic
- Similar to abstract backgrounds on Stripe or Linear websites

COMPOSITION:
- Shapes should flow from bottom-left toward top-right
- Leave center area relatively clear (text will go there)
- Subtle depth with overlapping translucent shapes
- Grain or noise texture for warmth

DO NOT INCLUDE:
- Any text or words
- Bright colors
- High contrast elements
- Recognizable objects
- Grid patterns
"""
    },
    {
        "name": "trust-bg.png",
        "prompt": """Create an abstract background image for a dark website section about trust and guarantees.

STYLE:
- Dark slate base color (#1e293b)
- Subtle geometric shapes with soft edges
- Hints of teal/cyan accent (#14b8a6) at very low opacity
- Flowing lines suggesting connection and reliability
- Very subtle, low contrast - this goes BEHIND text
- Professional, reassuring, modern aesthetic

COMPOSITION:
- Abstract shapes clustered toward edges
- Center and left side relatively clear (text will go there)
- Subtle interconnected nodes or flowing paths
- Gentle gradient from darker edges to slightly lighter center

DO NOT INCLUDE:
- Any text or words
- Bright saturated colors
- High contrast elements
- Recognizable objects
- Busy patterns
"""
    },
    {
        "name": "cta-bg.png",
        "prompt": """Create an abstract background image for a teal-colored call-to-action section.

STYLE:
- Teal/cyan base color (#14b8a6)
- Subtle flowing shapes in lighter and darker teal tones
- Soft organic waves and curves
- Very subtle, low contrast - text and button go on top
- Warm, inviting, energetic but not overwhelming
- Modern, clean aesthetic

COMPOSITION:
- Flowing shapes moving across the image
- Center area should be relatively uniform (white button goes there)
- Subtle depth with overlapping translucent shapes
- Soft gradient variations in the teal spectrum

DO NOT INCLUDE:
- Any text or words
- Colors outside the teal/cyan family
- High contrast elements
- Recognizable objects
- Sharp geometric patterns
"""
    }
]

for bg in BACKGROUNDS:
    print(f"Generating {bg['name']}...")

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=bg["prompt"],
        config=types.GenerateContentConfig(
            image_config=types.ImageConfig(
                aspect_ratio="21:9",  # Ultra-wide for full-width sections
                image_size="2K"
            )
        )
    )

    image_parts = [part for part in response.parts if part.inline_data]

    if image_parts:
        image = image_parts[0].as_image()
        output_path = OUTPUT_DIR / bg["name"]
        image.save(str(output_path))
        print(f"  Saved: {output_path}")
    else:
        text_parts = [part for part in response.parts if hasattr(part, 'text') and part.text]
        if text_parts:
            print(f"  Model response: {text_parts[0].text[:200]}")
        else:
            print(f"  Failed to generate {bg['name']}")

print("\nDone!")
