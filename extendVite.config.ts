
import type { Rollup } from 'vite'
const version = '1.1.2';
export const rollupOptions: Rollup.RollupOptions = {
    output: {
        assetFileNames: (assetInfo) => {
            const name = assetInfo.name as string;
            const fileNameSection = name.split('');
            const medium = Math.trunc(fileNameSection.length / 2);
            const sectionFirts =
                medium % 2 == 0
                    ? fileNameSection
                        .slice(0, medium)
                        .reverse()
                        .join('') + 'f'
                    : fileNameSection
                        .slice(medium)
                        .reverse()
                        .join('') + 's';
            if (name.endsWith('.css')) {
                return `css/${sectionFirts}_[hash]${version}[extname]`; // Carpeta y formato para archivos  css
            } else {
                return `assets/a${sectionFirts}_[hash]${version}[extname]`; // Carpeta y formato para archivos extension
            }
        },
        chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
                ? chunkInfo.facadeModuleId.split('/')
                : [];
            let name = '';
            if (facadeModuleId[facadeModuleId.length - 2]) {
                const arrayName =
                    facadeModuleId[facadeModuleId.length - 2];
                const fileNameSection = arrayName.split('');
                const medium = Math.trunc(
                    fileNameSection.length / 2
                );
                const sectionFirts =
                    medium % 2 == 0
                        ? fileNameSection
                            .slice(0, medium)
                            .reverse()
                            .join('') + 'f'
                        : fileNameSection
                            .slice(medium)
                            .reverse()
                            .join('') + 's';
                const finalName = `[hash]m${sectionFirts}`;
                name = finalName;
            } else {
                const arrayName = chunkInfo.name.split('');
                const medium = Math.trunc(arrayName.length / 2);
                const sectionFirts =
                    medium % 2 == 0
                        ? arrayName
                            .slice(0, medium)
                            .reverse()
                            .join('') + 'fn'
                        : arrayName
                            .slice(medium)
                            .reverse()
                            .join('') + 'sn';

                name = `s[hash]${sectionFirts}`;
            }

            return `js/chunk_${name}.[hash]${version}.js`;
        },
        entryFileNames: () => {
            //Archivo js principal
            return `js/chunkMain__[name]-[hash]${version}.js`;
        }
    }
}