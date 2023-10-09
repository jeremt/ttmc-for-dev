import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from '@mapbox/rehype-prism';

import data from './cards.json';

// @ts-ignore
const markdownParser = unified().use(remarkParse).use(remarkRehype).use(rehypePrism).use(rehypeStringify);

const appEl = document.querySelector<HTMLDivElement>('#app')!;

(async () => {
    for (const card of data.cards) {
        const questions: string[] = [];
        for (const question of card.questions) {
            questions.push((await markdownParser.process(question)).toString());
        }
        const answers: string[] = [];
        for (const answer of card.answers) {
            answers.push((await markdownParser.process(answer)).toString());
        }
        appEl.innerHTML += `
        <div class="card" style="--color: var(--color-${card.category})">
            <div class="header">
                <img class="icon" src="/${card.category}.png" alt="${card.category}-logo" />
                <div class="ttmc">Tu te mets combien en…</div>
                <div class="theme" style="--size: ${computeFontSizeToFitBox(card.theme, 140, 24, 'QuickSand')}px">${card.theme}</div>
            </div>
            <div class="questions">${questions
                .map(
                    (question, i) => `
                        <div class="question"><div class="num">${i + 1}</div>${question}</div>
                    `,
                )
                .join('')}</div>
        </div>
        <div class="card back" style="--color: var(--color-${card.category})">
            <div class="header">
                <img class="icon" src="/${card.category}.png" alt="${card.category}-logo" />
                <div class="ttmc">cache le dos de la carte !</div>
                <div class="theme">RÉPONSES</div>
            </div>
            <div class="answers">${answers
                .map(
                    (answer, i) => `
                <div class="answer"><div class="num">${i + 1}</div>${answer}</div>
            `,
                )
                .join('')}</div>
        </div>
        `;
    }
})();

function computeFontSizeToFitBox(text: string, boxWidth: number, boxHeight: number, fontFamily: string) {
    const container = document.createElement('div');
    container.style.width = boxWidth + 'px';
    container.style.height = boxHeight + 'px';
    container.style.overflow = 'hidden';
    container.style.position = 'absolute';
    container.style.visibility = 'hidden';
    document.body.appendChild(container);

    let fontSize = 14;
    const textElement = document.createElement('span');
    textElement.style.fontFamily = fontFamily;
    textElement.style.whiteSpace = 'wrap';

    container.appendChild(textElement);

    let low = 14;
    let high = 24; // Adjust the upper bound as needed

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        textElement.style.fontSize = mid + 'px';
        textElement.innerText = text;

        if (textElement.offsetWidth <= boxWidth && textElement.offsetHeight <= boxHeight) {
            fontSize = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    document.body.removeChild(container);
    return fontSize;
}
