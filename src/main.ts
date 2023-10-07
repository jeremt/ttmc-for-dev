import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from '@mapbox/rehype-prism';

import './main.css';
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
        console.log(questions);
        appEl.innerHTML += `
        <div class="card" style="--color: var(--color-${card.category})">
            <div class="header">
                <img class="icon" src="/${card.category}.png" alt="${card.category}-logo" />
                <div class="ttmc">Tu te mets combien en…</div>
                <div class="theme">${card.theme}</div>
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
