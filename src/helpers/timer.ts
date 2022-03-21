export function format(time: number): string {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
export function getTimeDiff(): number {
    const now = new Date();
    const domUnbanDate = new Date(1648134000 * 1000);
    return domUnbanDate.getTime() - now.getTime();
}
