import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		author: { type: "string", required: true },
		date: { type: "date", required: true },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath,
		},
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.split(".")[0],
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	disableImportAliasWarning: true,
	mdx: {
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: "one-dark-pro",
				},
			],
		],
	},
});
