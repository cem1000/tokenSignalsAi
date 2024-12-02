// Block animation
const blocksContainer = document.querySelector('.blocks-container');

function createBlocks() {
    for (let i = 0; i < 15; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.style.left = `${Math.random() * 100}vw`;
        block.style.animationDelay = `${Math.random() * 5}s`;
        block.style.animationDuration = `${10 + Math.random() * 20}s`;
        blocksContainer.appendChild(block);
    }
}

createBlocks();

