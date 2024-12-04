document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchValue = searchParams.get('search').toLowerCase();
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];

    const results = complaints.filter(complaint => 
        complaint.id.toLowerCase().includes(searchValue) || 
        complaint.name.toLowerCase().includes(searchValue)
    );

    const complaintsList = document.getElementById('complaintsList');
    complaintsList.innerHTML = '';
    results.forEach(complaint => {
        const complaintItem = document.createElement('div');
        complaintItem.classList.add('complaint-item');
        complaintItem.innerHTML = `
            <p><strong>ID:</strong> ${complaint.id}</p>
            <p><strong>Name:</strong> ${complaint.name}</p>
            <p><strong>Block:</strong> ${complaint.block}</p>
            <p><strong>Department:</strong> ${complaint.department}</p>
            <p><strong>Phone:</strong> ${complaint.phone}</p>
            <p><strong>Complaint:</strong> ${complaint.complaint}</p>
            <p><strong>Status:</strong> ${complaint.status}</p>
            <p><strong>Resolution:</strong> ${complaint.resolution}</p>
        `;
        complaintsList.appendChild(complaintItem);
    });
});
