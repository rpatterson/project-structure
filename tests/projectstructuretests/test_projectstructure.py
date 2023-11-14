# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
# SPDX-License-Identifier: MIT

"""
project-structure unit and integration tests.
"""

import sys
import subprocess  # nosec B404

import unittest

import projectstructure


class ProjectStructureTests(unittest.TestCase):
    """
    project-structure unit and integration tests.
    """

    def test_importable(self):
        """
        The Python package is on `sys.path` and importable.
        """
        self.assertIsNotNone(
            projectstructure.__version__,
            "Dynamic version not set from VCS tags",
        )
        import_process = subprocess.run(  # nosec B603
            [sys.executable, "-c", "import projectstructure"],
            check=True,
        )
        self.assertEqual(
            import_process.returncode,
            0,
            "The Python package not importable",
        )
