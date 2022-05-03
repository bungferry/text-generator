<script lang="ts">
  import { mapInput } from "./helpers";
  import GithubLogo from "./github.svg";

  const handleClick = (style) => {
    const e = document.querySelector<HTMLElement>(`[data-style="${style}"]`);
    navigator.clipboard.writeText(e.innerText);
  };

  let text = ``;
  $: styles = mapInput(text);
  $: show = text.length === 0 ? false : true;
</script>

<input autofocus bind:value={text} placeholder="type something..." />

<main>
  <small>Click/tap to copy</small>
  {#each Object.keys(styles) as style}
    <p on:click={() => handleClick(style)}>
      <small>{style}</small>
      {#if show}
        <div data-style={style}>
          {styles[style]}
        </div>
      {/if}
    </p>
  {/each}
</main>

<footer>
  <a
    href="https://github.com/afreeorange/stylish-text-generator"
    title="Source on Github"
  >
    <GithubLogo class="logo" />
  </a>
</footer>

<style>
  input {
    border: 0;
    color: var(--color-highlight);
    font-size: 150%;
    font-weight: bold;
    padding: 0.5em 0.25em;
    width: 100%;
    background: var(--color-dark);
  }

  main {
    margin-bottom: 1em;
  }

  main > small {
    background: var(--color-dark);
    color: var(--color-highlight);
    border-bottom: 1px solid var(--color-highlight);
    font-size: x-small;
    padding: 0.5em;
    display: block;
    width: 100%;
  }

  main p:not(:last-of-type) {
    border-bottom: 1px dotted var(--color-highlight-dull);
    min-height: 2em;
  }

  main p {
    cursor: pointer;
    padding: 0.25em;
  }

  main p:hover {
    background: var(--color-dark);
  }

  main p small {
    color: var(--color-highlight);
    font-size: small;
  }

  main p div {
    font-size: xx-large;
    color: var(--color-text);
    overflow-x: scroll;
  }

  footer {
    font-size: small;
    text-align: right;
    margin-right: 2em;
    margin-bottom: 2em;
  }

  footer a {
    color: var(--color-highlight);
  }

  /* https://stackoverflow.com/a/67126520 */
  footer :global(.logo) {
    width: 2.5em;
    height: 2.5em;
    fill: var(--color-highlight-dull)
  }
  footer :global(.logo):hover {
    fill: var(--color-highlight)
  }
</style>
