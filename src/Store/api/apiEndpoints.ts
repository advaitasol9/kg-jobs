import * as Updates from 'expo-updates';
import * as Application from 'expo-application';

export type ApiUrls = {
    hub: string,
    jobs: string,
}

const getUrlsByEnv: (env: string) => ApiUrls = (env = 'beta') => {
    const envUrls: { [index: string]: ApiUrls } = {
        "prod": {
            hub: 'https://accounts.kisangates.com/api',
            jobs: 'https://jobs.pandoforce.com/api'
        },
        "beta": {
            hub: 'https://beta-accounts.kisangates.com/api',
            jobs: 'https://beta-jobs.pandoforce.com/api'
        },
        "local": {
            hub: "https://kg-hub.nidheeshdas.me/api",
            jobs: "https://kg-jobs.nidheeshdas.me/api"
        }
    };

    return envUrls[env];
};

export function getBaseUrls(): ApiUrls {
    const releaseChannel = Updates.releaseChannel;

    return getUrlsByEnv('local');
}
