<script lang="ts">
	export let handleClick: () => void;
	export let active: boolean;
</script>

<div on:click={handleClick} on:keydown={handleClick} class="mobile-icon" class:active>
	<span />
	<span />
	<span />
</div>

<style lang="scss">
	.mobile-icon {
		position: relative;
		width: 30px;
		height: 30px;

		margin-left: auto;

		@media screen and (min-width: 900px) {
			display: none;
		}
	}

	span {
		position: absolute;
		width: 30px;
		height: 3px;
		background-color: $white;
		border-radius: 2px;

		transition: all 0.3s ease;

		&:nth-child(1) {
			top: 0;
		}

		&:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
		}

		&:nth-child(3) {
			bottom: 0;
		}
	}

	.active {
		span {
			background-color: $green;

			&:nth-child(1) {
				top: 50%;
				transform: translateY(-50%) rotate(45deg);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:nth-child(3) {
				bottom: 50%;
				transform: translateY(50%) rotate(-45deg);
			}
		}
	}
</style>
