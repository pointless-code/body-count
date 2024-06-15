import minimist from 'minimist';

(async () => {
  const fetch = (await import('node-fetch')).default;

  async function fetchAndCountBodyWords(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      
      countBodyOccurrences(await response.text());
    } catch (error) {
      console.error('There was a problem with the fetch operation.');
    }
  }

  function countBodyOccurrences(content) {
    const matches = content.match(new RegExp(`\\bbody\\b`, 'gi'));
    const count = matches ? matches.length : 0;

    console.log(
        count === 1 
        ? `Your body count is: ${count} body.`
        : `Your body count is: ${count} bodies.`
    );
  }

  const args = minimist(process.argv.slice(2));
  const url = args.url;

  if (!url) {
    console.error('Please provide a URL with --url.');
    process.exit(1);
  }

  await fetchAndCountBodyWords(url);
})();
