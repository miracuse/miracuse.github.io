"""
Convert the kits file into a site-friendly format.
"""

# Setup 
### Imports
import os
import pandas as pd

### Globals
INPUT_FILE = "miracuse_kits.xlsx"
OUTPUT_FILE = "_data/miracuse_kits.tsv"
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))

# Main
def main():
    # Load in the data
    input_data = pd.read_excel(INPUT_FILE)

    # Clean the data
    for col in input_data.columns:
        input_data[col] = input_data[col].apply(lambda x: x.strip())

    # Output data as TSV
    output_path = os.path.join(PROJECT_DIR, OUTPUT_FILE)
    input_data.to_csv(output_path, index=False, encoding="utf-8", sep="\t")


if __name__ == "__main__":
    main()
