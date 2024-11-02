<script lang="ts">
	import { JobEntity } from '$lib/domain/JobEntity';
	import { CompanyEntity } from '$lib/domain/CompanyEntity';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Job from './components/Job.svelte';
	import Company from './components/Company.svelte';

	import micro1 from '$lib/assets/micro1_logo.png';
	import liga from '$lib/assets/LIGA_logo.png';
	import rdStation from '$lib/assets/rd_station_logo.png';
	import amparo from '$lib/assets/amparo_logo.png';
	import google from '$lib/assets/google_logo.jpg';

	interface IExperience {
		company: CompanyEntity;
		jobs: JobEntity[];
	}

	const data: IExperience[] = [
		{
			company: new CompanyEntity(google, 'Google', 'https://google.com'),
			jobs: [new JobEntity('Coming soon', '', null)]
		},
		{
			company: new CompanyEntity(amparo, 'Amparo', 'https://www.amparo.com.vc/'),
			jobs: [
				new JobEntity(
					'Software Engineer',
					'I develop and maintain backend applications, working with microservices architectures using Go, hosted on AWS with integration of services like Lambda and SQS. My role involves collaborating with the team to enhance practices, architectures, and solutions, conducting tests, debugging code, and optimizing performance.',
					{
						start: new Date('2024-09-01 13:00:00'),
						end: null
					}
				)
			]
		},
		{
			company: new CompanyEntity(rdStation, 'RD Station', 'https://www.rdstation.com/'),
			jobs: [
				new JobEntity(
					'Software Engineer',
					'I developed and maintained backend applications, working with microservices architectures using TypeScript (express) and Go. Additionally, I developed and maintained web platforms built with Vue. My role involved collaborating with the team to enhance practices, architectures, and solutions, conducting tests, debugging code, and optimizing performance. I managed code versioning using Git, with platforms such as GitLab and GitHub.',
					{
						start: new Date('2024-07-01 13:00:00'),
						end: new Date('2024-09-01 13:00:00')
					}
				)
			]
		},
		{
			company: new CompanyEntity(micro1, 'micro1', 'https://www.micro1.ai/'),
			jobs: [
				new JobEntity(
					'Software Engineer',
					'I focused on prompt engineering to optimize language model training and input/output engineering to enhance the training process. My work involved utilizing Python and C++, applying data structures and algorithms (DSA) to refine the models. Additionally, I conducted thorough code reviews to ensure the highest quality in my developments.',
					{
						start: new Date('2024-03-01 13:00:00'),
						end: new Date('2024-05-01 13:00:00')
					}
				)
			]
		},
		{
			company: new CompanyEntity(
				liga,
				'LIGA - Innovation Lab for Games and Apps',
				'https://liga.facens.br/'
			),
			jobs: [
				new JobEntity(
					'Mid-Level Software Developer',
					'I developed and maintained backend applications, working with both monolithic and microservices architectures using NestJS, hosted on AWS with integration of services like Lambda, SQS, and SES. I also created applications using Ionic and Angular, managing the entire development process through to publication on the Google Play Store and Apple App Store. Additionally, I developed and maintained web platforms built with Angular. My role involved collaborating with the team to enhance practices, architectures, and solutions, conducting tests, debugging code, and optimizing performance. I managed code versioning using Git, with platforms such as GitLab and AWS CodeCommit.',
					{
						start: new Date('2022-07-01 13:00:00'),
						end: new Date('2023-10-01 13:00:00')
					}
				),
				new JobEntity(
					'Junior Software Developer',
					'I developed and maintained backend applications using NestJS, which were hosted on AWS with services including Lambda, SQS, and SES. I also handled the creation of applications using Ionic and Angular, overseeing the full development lifecycle up to their publication on the Google Play Store and Apple App Store. Additionally, I was responsible for the development and maintenance of web platforms built with Angular. My role involved conducting tests, debugging code, and optimizing performance. Furthermore, I managed code versioning using Git and utilized platforms like GitLab.',
					{
						start: new Date('2020-10-01 13:00:00'),
						end: new Date('2022-07-01 13:00:00')
					}
				),
				new JobEntity(
					'Intern',
					'I developed and maintained games and simulators using Unity and C#. My responsibilities included conducting tests, debugging code, and optimizing performance to ensure high-quality outputs. Additionally, I managed code versioning using GitLab to maintain organized and accessible project versions.',
					{
						start: new Date('2020-01-01 13:00:00'),
						end: new Date('2020-10-01 13:00:00')
					}
				),
				new JobEntity(
					'Volunteer',
					'I maintained games and simulators developed in Unity and C#, focusing on conducting tests, debugging code, and optimizing performance to enhance functionality. Additionally, I managed code versioning through GitLab to ensure efficient tracking and collaboration on project updates.',
					{
						start: new Date('2019-08-01 13:00:00'),
						end: new Date('2020-01-01 13:00:00')
					}
				)
			]
		}
	];
	const sections: HTMLElement[] = new Array(data.length);
</script>

<svelte:head>
	<meta name="theme-color" content="#151922" />
</svelte:head>

<Header />

<main class="flex w-full flex-col pt-20">
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-night text-2xl font-semibold uppercase md:text-3xl">Experience</h2>
		<div class="bg-cordovan h-1 w-[5rem] rounded-full"></div>
	</div>
	{#each data as { company, jobs }, i}
		{@const isOdd = !!(i % 2)}
		{@const theme = isOdd ? 'dark' : 'light'}
		<section bind:this={sections[i]} class:section-light={!isOdd} class:section-night={isOdd}>
			<div class="flex w-full flex-col items-center gap-10">
				<Company {theme} {company} />
				{#each jobs as job}
					<Job {theme} {job} />
				{/each}
			</div>
		</section>
	{/each}
</main>

<Footer />
