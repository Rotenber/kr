document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('td');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            if (cell.classList.contains('active')) {
                cell.classList.remove('active');
            } else {
                cells.forEach(c => c.classList.remove('active'));
                cell.classList.add('active');
            }
        });
    });
});

function selectDate(cell) {
    const cells = document.querySelectorAll('td');
    cells.forEach(c => c.classList.remove('active'));
    cell.classList.add('active');
}

