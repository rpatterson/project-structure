# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
#
# SPDX-License-Identifier: MIT

import commitizen
import commitizen.providers

# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Project Structure'
copyright = '2023, Ross Patterson'
author = 'Ross Patterson'
# https://www.sphinx-doc.org/en/master/_modules/sphinx/builders/epub3.html
cz_provider = commitizen.providers.get_provider(commitizen.config.read_cfg())
release = cz_provider.get_version()
cz_scheme = commitizen.version_schemes.get_version_scheme(cz_provider.config)
major, minor, patch = cz_scheme(release).release
version = f"{major}.{minor}"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.imgconverter',
    'sphinx.ext.todo',
    'sphinx_copybutton',
    'sphinxext.opengraph',
]

templates_path = ['_templates']
exclude_patterns = []
suppress_warnings = ['epub.unknown_project_files']

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']
html_logo = './_static/logo-120.png'
html_favicon = './_static/favicon.ico'

# -- Linter options ----------------------------------------------------------
# Disallow redirects:
linkcheck_allowed_redirects = {}
linkcheck_anchors_ignore = [
    # The default from the Sphinx extension:
    "^!",
    # Tolerate links to source code lines in VCS provider web UIs:
    "^L[0-9]+",
    # Links to Matrix chat rooms:
    "^/#.+:.+",
]
linkcheck_ignore = [
    "https://liberapay.com/.*",
    "https://gitlab.com/.*/(new|edit)",
    "https://github.com/.*/settings",
]

# -- Extension options -------------------------------------------------------
todo_include_todos = True
ogp_site_url = 'http://project-structure.readthedocs.io/'
ogp_image = './_static/logo.png'

# -- Other formats -----------------------------------------------------------
latex_logo = './_static/logo.svg'
# https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-applehelp_bundle_id
applehelp_bundle_id = 'net.rpatterson.project-structure'
# https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-applehelp_disable_external_tools
applehelp_disable_external_tools = True
