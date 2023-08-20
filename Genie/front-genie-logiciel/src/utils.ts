export async function getRandomTexts(): Promise<{ [key: string]: string }> {
    try {
      const response = await fetch('/who.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching random texts:', error);
      return {};
    }
  }