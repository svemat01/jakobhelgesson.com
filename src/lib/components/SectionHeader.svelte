<script lang="ts">
	export let header: string;
	export let subHeader: string;
</script>

<span class="header">{header}</span>
<span class="subheader">{subHeader}</span>

<style lang="scss">
	/* h2 {
		font-size: 2.4rem;
		font-weight: 400;

		color: $gray-800;

		margin-bottom: 1.6rem;
	}

	h3 {
		font-size: 3.6rem;
		font-weight: 500;
		text-align: center;

		max-width: 75rem;

		margin-bottom: 5rem;
	} */

    span {
        display: block;
        text-align: var(--text-align, center);
    }

    .header {
        font-size: 2.4rem;
        font-weight: 400;

        color: $gray-800;

        margin-bottom: 1.6rem;
    }

    .subheader {
        font-size: 3.6rem;
        font-weight: 500;

        max-width: 75rem;

        margin-bottom: var(--margin-bottom, 5rem);
    }

</style>
