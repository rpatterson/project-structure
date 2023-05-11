.. SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
..
.. SPDX-License-Identifier: MIT

########################################################################################
Project Structure
########################################################################################
project-structure foundation or template
****************************************************************************************

.. list-table::
   :class: borderless align-right

   * - .. figure:: https://img.shields.io/npm/v/@rpattersonnet/project-structure?logo=npm
          :alt: NPM package version
          :target: https://www.npmjs.com/package/@rpattersonnet/project-structure
       .. figure:: https://img.shields.io/npm/dw/@rpattersonnet/project-structure?logo=npm
	  :alt: NPM downloads per week
          :target: https://www.npmjs.com/package/@rpattersonnet/project-structure
       .. figure:: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier
          :alt: Code style: prettier
          :target: https://prettier.io/
       .. figure:: https://api.reuse.software/badge/gitlab.com/rpatterson/project-structure
          :alt: REUSE license status
          :target: https://api.reuse.software/info/gitlab.com/rpatterson/project-structure

     - .. figure:: https://img.shields.io/keybase/pgp/rpatterson?logo=keybase
          :alt: KeyBase PGP key ID
          :target: https://keybase.io/rpatterson
       .. figure:: https://img.shields.io/github/followers/rpatterson?style=social
          :alt: GitHub followers count
          :target: https://github.com/rpatterson
       .. figure:: https://img.shields.io/liberapay/receives/rpatterson.svg?logo=liberapay
          :alt: LiberaPay donated per week
          :target: https://liberapay.com/rpatterson/donate
       .. figure:: https://img.shields.io/liberapay/patrons/rpatterson.svg?logo=liberapay
          :alt: LiberaPay patrons count
          :target: https://liberapay.com/rpatterson/donate


This repository is meant to be used as a minimal, yet opinionated baseline for software
projects.  It includes:

- Basic `JavaScript NPM package`_ metadata
- A `Makefile`_ for local development build, test and maintenance tasks
- A `Makefile`_ target to format all code, including using for style
- `An opinionated code formatter`_ that formats all code
- `VCS hooks`_ to enforce `conventional commits`_ and successful build and test on
  commit and push, and release notes on push
- Targets/recipes in the `Makefile`_ to automate releases controlled by `conventional
  commits`_ and end-user oriented release notes by `Towncrier`_
- Targets/recipes in the `Makefile`_ to automate upgrading requirements and dependencies

The intended use is to add this repository as a VCS remote for your project.  Thus
developers can merge changes from this repository as we make changes related to project
structure and tooling.  As we add structure specific to certain types of projects
(e.g. CLI scripts, web development, etc.), frameworks, libraries and such, branches will
be used for each such variation such that structure common to different variations can
be merged back into the branches for those specific variations.

.. contents:: Table of Contents


****************************************************************************************
Template Usage
****************************************************************************************

This is a rough guide to applying this project template to your project.  This is not
thoroughly tested as such tests would be so meta as to be extremely wasteful of
developer time to create and maintain.  So report any issues you have or better yet
figure it out and submit a PR with corrections to this section.

#. Choose the right branch to use:

   Is your project a CLI utility?  A web application?  For what programming language
   will your project publish packages for?  Which project hosting provider
   and/or CI/CD platform will you use?  Choose the appropriate branch for your project:

   - ``(py|js|ruby|etc.)``:

     Basic package metadata with build, tests, linters, code formatting and release
     publishing from local developer checkouts.

   - etc.

#. Reconcile VCS history:

   If starting a fresh project::

     $ git clone --origin "template" --branch "${TEMPLATE_BRANCH:?}" \
     "https://gitlab.com/rpatterson/project-structure.git" "./foo-project"
     $ cd "./foo-project"
     $ git remote add "origin" "git@gitlab.com:foo-username/foo-project.git"
     $ git config remote.template.tagOpt --no-tags
     $ git switch -C "main" --track "origin/main"

   If merging into an existing project::

     $ git remote add "template" \
     "https://gitlab.com/rpatterson/project-structure.git"
     $ git config remote.template.tagOpt --no-tags
     $ git merge --allow-unrelated-histories "template/${TEMPLATE_BRANCH:?}"

#. Rename file and directory paths derived from the project name::

     $ git ls-files | grep -iE 'project.?structure'

#. Rename strings derived from the project name and template author identity in project
   files::

     $ git grep -iE 'project.?structure|ross|Patterson'

#. Examine ``# TEMPLATE:`` comments and change as appropriate:

   These are the bits that need the developer's attention and reasoning to take the
   correct action.  So read the comments and address them with care and attention::

     $ git grep "TEMPLATE"

Finally, remove this section from this ``./README.rst`` and update the rest of it's
content as appropriate for your project.  As fixes and features are added to the
upstream template, you can merge them into your project and repeat steps 3-5 above as
needed.

This template publishes pre-releases on all pushes to the ``develop`` branch and final
releases on all pushes to the ``main`` branch.  Project owners may decide which types
of changes should go through pre-release before final release and which types of changes
should go straight to final release.  For example they may decide that:

- Contributions from those who are not maintainers or owners should be merged into
  ``develop``.  See `the ./CONTRIBUTING.rst file`_ for such an example public
  contributions policy and workflow.

- Fixes for bugs in final releases may be committed to a branch off of ``main`` and,
  after passing all tests and checks, merged back into ``main`` to publish final
  releases immediately.

- Routine version upgrades for security updates may also be merged to ``main`` as
  above for bug fixes.


****************************************************************************************
Installation
****************************************************************************************

Install using any tool for `installing JavaScript NPM packages`_::

  $ npm install project-structure-element


****************************************************************************************
Contributing
****************************************************************************************

NOTE: `This project is hosted on GitLab`_.  There's `a mirror on GitHub`_ but please use
GitLab for reporting issues, submitting PRs/MRs and any other development or maintenance
activity.

See `the ./CONTRIBUTING.rst file`_ for more details on how to get started with
development.


****************************************************************************************
Motivation
****************************************************************************************

There are many other project templates so why make another? I've been doing full-stack
web development since 1998, so I've had plenty of time to develop plenty of opinions of
my own.  What I want in a template is complete tooling (e.g. test coverage, linting,
formatting, CI/CD, etc.) but minimal dependencies, structure, and opinion beyond
complete tooling (e.g. some build/task system, structure for frameworks/libraries not
necessarily being used, etc.).  I couldn't find a template that manages that balance so
here we are.

I also find it hard to discern from other templates why they made what choices the did.
As such, I also use this template as a way to try out various different options in the
development world and evaluate them for myself.  You can learn about my findings and the
reasons the choices I've made in the commit history.

Most importantly, however, I've never found a satisfactory approach to keeping project
structure up to date over time.  So the primary motivation is to use this repository as
a remote from which we can merge structure updates over the life of projects using the
template.


.. _`JavaScript NPM package`: https://docs.npmjs.com/creating-a-package-json-file
.. _`An opinionated code formatter`: https://prettier.io/docs/en/install.html
.. _`Towncrier`: https://towncrier.readthedocs.io

.. _`conventional commits`: https://www.conventionalcommits.org

.. _`installing JavaScript NPM packages`:
   https://docs.npmjs.com/downloading-and-installing-packages-locally

.. _`This project is hosted on GitLab`:
   https://gitlab.com/rpatterson/project-structure
.. _`a mirror on GitHub`:
   https://github.com/rpatterson/project-structure

.. _Makefile: ./Makefile
.. _`the ./CONTRIBUTING.rst file`: ./CONTRIBUTING.rst
.. _`VCS hooks`: ./.husky/
