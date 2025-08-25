// Basic admin functionality - can be expanded
document.addEventListener('DOMContentLoaded', function() {
    // Simple password protection for admin
    if (window.location.pathname.includes('admin.html')) {
        const password = prompt('Enter admin password:');
        if (password !== 'sujata2025') {
            alert('Incorrect password');
            window.location.href = 'index.html';
        }
    }
});

// Functions for admin panel expansion
function uploadExcelFile() {
    // TODO: Implement Excel file upload
    console.log('Excel upload functionality to be implemented');
}

function exportData() {
    // TODO: Implement data export
    console.log('Data export functionality to be implemented');
}
