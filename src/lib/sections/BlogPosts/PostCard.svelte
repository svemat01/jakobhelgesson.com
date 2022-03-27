<script lang="ts">
    import { formatDate } from '$util/formatDate';

    export let title: string;
    export let description: string;
    export let date: string;
    export let path: string;

    const formatedDate = formatDate(date);
</script>


<article on:click={() => (location.href = path)}>
    <div class="top">
        <h1 class="title"><a href={path}>{title}</a></h1>
        <p class="publish-date">{formatedDate}</p>
    </div>
    <p>{description}</p>
</article>

<style lang="scss">
    article {
        background: $gray-color;

        padding: 1.2rem 2rem;
        padding-left: 4.2rem;

        border-radius: 1.5rem;

        .top {
            display: flex;
            align-items: center;

            h1 {
                font-size: 2.2rem;
                font-weight: 600;
                margin-bottom: 0.5rem;

                position: relative;

                &:before {
                    text-align: right;
                    content: '#';
                    color: $accent-color;
                    position: absolute;
                    left: -1.8rem;
                    top: -0.025rem;
                }
            }

            .publish-date {
                font-size: 1.7rem;
                color: $light-color;
                margin-left: auto;
            }
        }

        p {
            font-size: 1.6rem;
            color: $light-color;
            margin-top: 0.3rem;
        }
    }
</style>
