function generateCode() {
    const selectedElement = document.querySelector('#elementSelect').value;
    const classValue = document.querySelector('#classInput').value.trim();
    const idValue = document.querySelector('#idInput').value.trim();
    const contentValue = document.querySelector('#contentInput').value;
    const link = document.querySelector('#linkInput').value;

    if(selectedElement == "") {
        return;
    }

    let generatedHTML = `<${selectedElement}`;

    if (classValue !== '') {
        generatedHTML += ` class="${classValue}"`;
    }
    if (idValue !== '') {
        generatedHTML += ` id="${idValue}"`;
    }

    if (selectedElement === 'img') {
        if (link !== '') {
            generatedHTML += ` src="${link}"`;
            generatedHTML += ' />';
        } else {
            generatedHTML += ' />';
        }
    } else if (selectedElement === 'input') {
        const inputType = document.querySelector('#inputType').value;
        generatedHTML += ` type="${inputType}"`;

        if (contentValue !== '') {
            generatedHTML += ` value="${contentValue}"`;
            generatedHTML += ' />';
        } else {
            generatedHTML += ' />';
        }
    } else if (selectedElement === 'a') {
        if (link !== '') {
            generatedHTML += ` href="${link}"`;
        }
        if (contentValue !== '') {
            generatedHTML += `>${contentValue}</${selectedElement}>`;
        } else {
            generatedHTML += `></${selectedElement}>`;
        }
    } else {
        if (contentValue !== '') {
            generatedHTML += `>${contentValue}</${selectedElement}>`;
        } else {
            generatedHTML += `></${selectedElement}>`;
        }
    }

    const generatedCodeTextarea = document.getElementById('generatedCode');
    generatedCodeTextarea.value = generatedHTML;
}

function copyToClipboard() {
    const generatedCodeTextarea = document.getElementById('generatedCode');
    generatedCodeTextarea.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();

    const copyButton = document.getElementById('copyButton');
    copyButton.textContent = 'Copied';

    setTimeout(function() {
        copyButton.textContent = 'Copy';
    }, 1000);
}

function toggleInputs() {
    document.getElementById('generatedCode').value = '';
    const selectedElement = document.querySelector('#elementSelect').value;
    const contentLabel = document.querySelector('#contentLabel');
    const contentInput = document.querySelector('#contentInput');
    const linkLabel = document.querySelector('#linkLabel');
    const linkInput = document.querySelector('#linkInput');
    const inputTypeLabel = document.querySelector('#inputTypeLabel');
    const inputType = document.querySelector('#inputType');

    if (selectedElement === 'img') {
        contentLabel.style.display = 'none';
        contentInput.style.display = 'none';
        linkLabel.style.display = 'inline';
        linkInput.style.display = 'inline';
        inputTypeLabel.style.display = 'none';
        inputType.style.display = 'none';
    } else if (selectedElement === 'a') {
        contentLabel.style.display = 'inline';
        contentInput.style.display = 'inline';
        linkLabel.style.display = 'inline';
        linkInput.style.display = 'inline';
        inputTypeLabel.style.display = 'none';
        inputType.style.display = 'none';
    }
     else if(selectedElement == 'input') {
        inputTypeLabel.style.display = 'inline';
        inputType.style.display = 'inline';
        contentLabel.style.display = 'inline';
        contentInput.style.display = 'inline';
        linkLabel.style.display = 'none';
        linkInput.style.display = 'none';
    }
     else {
        contentLabel.style.display = 'inline';
        contentInput.style.display = 'inline';
        linkLabel.style.display = 'none';
        linkInput.style.display = 'none';
    }
}