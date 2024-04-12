// @index('./**/*.ts', f => `import ${f.name} from '${f.path}'`)
import fetchNews from "./fetchNews";
// @endindex
export const newsSagasArray = [fetchNews()];
