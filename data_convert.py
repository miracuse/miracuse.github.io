"""
Convert the game data into site-friendly formats.

- jrgarrar
"""

###############################################################################
# Setup #######################################################################
###############################################################################
### Imports
import os
import pandas as pd
from jinja2 import Template

### Globals
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
DATA_DIR = os.path.join(PROJECT_DIR, "_data")
JS_DIR = os.path.join(ASSETS_DIR, "js")
RESOURCES_DIR = os.path.join(PROJECT_DIR, "resources")
INPUT_FILE = "miracuse_data.xlsx"
SHEET_NAMES = ["Kit", "Class", "Specialization"]


###############################################################################
# Helper Functions ############################################################
###############################################################################
def load_data(index, sort_by=None):
    # Determine keyword
    keyword = SHEET_NAMES[index].lower()

    # Load in the data
    input_data = pd.read_excel(INPUT_FILE, SHEET_NAMES[index]).sort_values(by=sort_by)

    # Clean the data
    for col in input_data.columns:
        input_data[col] = input_data[col].apply(lambda x: x.strip())

    # Output data as TSV
    output_path = os.path.join(DATA_DIR, f"miracuse_{keyword}.tsv")
    input_data.to_csv(output_path, index=False, encoding="utf-8", sep="\t")

    # Output data as JS using a template
    template_path = os.path.join(RESOURCES_DIR, f"{keyword}_data.js")
    with open(template_path, "r") as f:
        # Read template in as a string
        template_list = f.readlines()
        template_str = "".join(template_list)
        template = Template(template_str)

        # Prep output data
        output_data = input_data.to_json(orient="records", indent=4)

        # Fill in parameter values 
        if keyword == "kit":
            template_filled = template.render(kit_json = output_data)
        elif keyword == "class":
            template_filled = template.render(class_json = output_data)
        elif keyword == "specialization":
            template_filled = template.render(specialization_json = output_data)
        else:
            print("Bad Keyword")

    output_filename = f"{keyword}_data.js"
    output_path = os.path.join(JS_DIR, output_filename)
    with open(output_path, "w") as f:
        f.writelines(template_filled)


###############################################################################
# Main ########################################################################
###############################################################################
def main():
    # Load Kit Data
    load_data(0, sort_by=['Type', 'Kit'])

    # Load Class Description Data
    load_data(1, sort_by='Class')

    # Load Specialization Description Data
    load_data(2, sort_by='Specialization')


if __name__ == "__main__":
    main()
