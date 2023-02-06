"""
Convert the kits file into a site-friendly format.
"""

# Setup 
### Imports
import os
import pandas as pd

### Globals
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(PROJECT_DIR, "_data")
INPUT_FILE = "miracuse_kits.xlsx"
OUTPUT_FILE = "miracuse_kits.tsv"
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
JS_DIR = os.path.join(ASSETS_DIR, "js")

# Main
def main():
    # Load in the data
    input_data = pd.read_excel(INPUT_FILE).sort_values(by=['Type', 'Kit'])

    # Clean the data
    for col in input_data.columns:
        input_data[col] = input_data[col].apply(lambda x: x.strip())

    # Output data as TSV
    output_path = os.path.join(OUTPUT_DIR, OUTPUT_FILE)
    input_data.to_csv(output_path, index=False, encoding="utf-8", sep="\t")

    # Output data as a JSON
    input_data.to_json("data.json", orient="records")


if __name__ == "__main__":
    main()
