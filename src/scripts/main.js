'use strict';

const table = document.querySelector('table');

['tbody', 'thead', 'tfoot'].forEach((section) => {
  const rows = table.querySelector(section).rows;

  for (const row of rows) {
    const cells = row.cells;

    if (cells.length < 2) {
      continue;
    }

    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
});
