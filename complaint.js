const existingComplaints = JSON.parse(localStorage.getItem('complaints')) || [
    { id: 'S1234', name: 'John Doe', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543210', complaint: 'Noise complaint.', status: 'Resolved', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत सफलतापूर्वक प्राप्त हो गई है। हमारी टीम आपकी समस्या पर शीघ्र कार्रवाई करेगी। धन्यवाद!.' },
    { id: 'S5678', name: 'Jane Smith', block: 'Block 2', department: 'Health', phone: '0987654321', complaint: 'Sanitation issue.', status: 'In Progress', resolution: 'Not Yet Resolved' },
    { id: 'S1111', name: 'रमेश कुमार', block: 'Block 3', department: 'Health', phone: '1234509876', complaint: 'स्वास्थ्य समस्या।', status: 'Resolved', resolution: 'समस्या सुलझाई गई।' }
];

const updateComplaintsInStorage = (complaints) => {
    localStorage.setItem('complaints', JSON.stringify(complaints));
};

updateComplaintsInStorage(existingComplaints);

document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const complaintId = 'S' + Math.floor(Math.random() * 10000);
    const newComplaint = {
        id: complaintId,
        name: document.getElementById('name').value,
        block: document.getElementById('block').value,
        department: document.getElementById('department').value,
        phone: document.getElementById('phone').value,
        complaint: document.getElementById('complaint').value,
        status: 'In Progress',
        resolution: 'Not Yet Resolved',
    };

    existingComplaints.push(newComplaint);
    updateComplaintsInStorage(existingComplaints);

    // Redirect to confirmation page with query parameters
    const params = new URLSearchParams(newComplaint).toString();
    window.location.href = `confirmation.html?${params}`;
});
