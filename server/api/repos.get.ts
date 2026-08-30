export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  if (!config.githubToken) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing NUXT_GITHUB_TOKEN",
    });
  }

  const query = `
        query {
            user(login: "Deprecatism") {
                pinnedItems(first: 10) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                        }
                    }
                }
            }
        }
    `;

  const result = await $fetch<{
    data?: {
      user?: {
        pinnedItems?: {
          nodes?: Array<{
            name: string;
            description: string | null;
            url: string;
          }>;
        };
      };
    };
    errors?: Array<{ message: string }>;
  }>("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.githubToken}`,
    },
    body: {
      query,
    },
  });

  const firstError = result.errors?.[0];

  if (firstError) {
    throw createError({
      statusCode: 502,
      statusMessage: firstError.message,
    });
  }

  return result.data?.user?.pinnedItems?.nodes ?? [];
});
