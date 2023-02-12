#################################################################################
# GLOBALS                                                                       #
#################################################################################

PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PROJECT_NAME = miracuse_character_creator
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
	$(PYTHON_INTERPRETER) data_convert.py

## Compile JSX into JS
js:
	npx babel --presets @babel/preset-react assets/js/character_creator_proto.js > assets/js/character_creator.js

## Lint/Format Files
lint:
	# black *.py
	npx prettier --write .

## Deploy Locally
local:
	bundle exec jekyll serve

build:
	data js


