export const fileSizeValidation = (value, fileSizeMB = 2) => {
  const MAX_FILE_SIZE = fileSizeMB * 1024 * 1024;
  return value.size <= MAX_FILE_SIZE;
};

export function bytesToKb(bytes) {
  return Math.round(bytes / 1024);
}
