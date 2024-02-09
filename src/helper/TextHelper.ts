export class TextHelper {
  truncateText(content: string): string {
    const maxLength = 80;
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    } else {
      return content;
    }
  }
}
