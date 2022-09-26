#################################################################################
# GLOBALS                                                                       #
#################################################################################

PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PROJECT_NAME = school_district_clustering
PYTHON_INTERPRETER = python3

#################################################################################
# COMMANDS                                                                      #
#################################################################################

## Install Dependencies
requirements: 
	rbenv install
	bundle install
	pip install pandas
	pip install openpyxl

## Process Data
data: 
	$(PYTHON_INTERPRETER) kit_convert.py

## Deploy Locally
local:
	bundle exec jekyll serve

## Lint/Format Files
lint:
	# black *.py
	npx prettier --write .

## Compile JSX into JS
js:
	npx babel --presets @babel/preset-react assets/js/character_creator_proto.js > assets/js/character_creator.js

## Make All
all: data local

