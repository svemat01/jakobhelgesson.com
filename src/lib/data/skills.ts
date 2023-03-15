// astro.png  figma.png  go.png    js.png   linux.png  py.png     svelte.png    ts.png
// css.png    git.png    html.png  k3s.png  pnpm.png   react.png  tailwind.png
import astro from '$lib/assets/icons/astro.png';
import css from '$lib/assets/icons/css.png';
import figma from '$lib/assets/icons/figma.png';
import git from '$lib/assets/icons/git.png';
import go from '$lib/assets/icons/go.png';
import html from '$lib/assets/icons/html.png';
import js from '$lib/assets/icons/js.png';
import k3s from '$lib/assets/icons/k3s.png';
import linux from '$lib/assets/icons/linux.png';
import pnpm from '$lib/assets/icons/pnpm.png';
import py from '$lib/assets/icons/py.png';
import react from '$lib/assets/icons/react.png';
import svelte from '$lib/assets/icons/svelte.png';
import tailwind from '$lib/assets/icons/tailwind.png';
import ts from '$lib/assets/icons/ts.png';

type Skill = {
	img: string;
	name: string;
};

type PrimarySkill = Skill & {
	color: string;
};

type Skills = Record<'Languages' | 'Technologies' | 'Tools', Skill[]>;

export const skills: Skills = {
	Languages: [
		// Go, typescript, javascript, HTML, CSS, python
        // Make color the primary color for the project
		{ img: go, name: 'Go' },
		{ img: ts, name: 'Typescript' },
		{ img: js, name: 'Javascript' },
		{ img: html, name: 'HTML' },
		{ img: css, name: 'CSS' },
		{ img: py, name: 'Python' }
	],
	Technologies: [
		// Svelte/Kit, React, Astro, Tailwind
		{ img: svelte, name: 'Svelte' },
		{ img: react, name: 'React' },
		{ img: astro, name: 'Astro' },
		{ img: tailwind, name: 'Tailwind' }
	],
	Tools: [
		// Kubernetes, PNPM, Git, Linux, Figma
		{ img: k3s, name: 'Kubernetes' },
		{ img: pnpm, name: 'PNPM' },
		{ img: git, name: 'Git' },
		{ img: linux, name: 'Linux' },
		{ img: figma, name: 'Figma' }
	]
};

export const primarySkills: PrimarySkill[] = [
	{ img: svelte, name: 'Svelte', color: '#FF3E00' },
	{ img: ts, name: 'Typescript', color: '#3178C6' },
	{ img: go, name: 'Go', color: '#00ADD8' },
]
