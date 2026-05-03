
function showSection(sectionID) {
    const contentSections = document.querySelectorAll('.content');
    const homeSections    = document.querySelectorAll('.homecontent');

    
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    
    homeSections.forEach(section => {
        section.style.display = 'none';
    });

    
    const activeSection = document.getElementById(sectionID);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}


function clearFields() {
    const createSection = document.getElementById('create');
    const inputs = createSection.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => {
        input.value = '';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', function () {
            const contentSections = document.querySelectorAll('.content');
            const homeSections    = document.querySelectorAll('.homecontent');

            contentSections.forEach(section => {
                section.style.display = 'none';
            });
            homeSections.forEach(section => {
                section.style.display = 'block';
            });
        });
    }
});


function showToast(toastId) {
    const toast = document.getElementById(toastId);
    if (!toast) return;
    toast.classList.remove('toast-hidden');
    toast.style.opacity = '1';
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.classList.add('toast-hidden'), 500);
    }, 3000);
}


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const status    = urlParams.get('status');

    if (status === 'success') {
        showSection('create');
        showToast('success-toast');
    } else if (status === 'updated') {
        showSection('update');
        showToast('toast-updated');
    } else if (status === 'deleted') {
        showSection('delete');
        showToast('toast-deleted');
    }

    
    window.history.replaceState({}, document.title, window.location.pathname);
};
