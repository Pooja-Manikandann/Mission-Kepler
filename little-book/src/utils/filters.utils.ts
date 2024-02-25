import { uniq } from "lodash";
import { blogType } from "src/modals/modals";

export const filterHelper = {
    constructFilters: (blogs: Array<blogType>) => {
        const data = uniq(blogs.map((blog) => {
            return blog.type.toLowerCase();
        }));
        const allfiltersData = data.reverse().map((item) => (
            {
                id: item,
                name: item,
                value: true,
                label: `${item} Blogs`,
            }
        ))
        return {
            filters: data,
            filtersData: allfiltersData,
        }
    }
}