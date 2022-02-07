const configuration = {

    name: 'Murkwürst is burning',

    module: 'murkwurst-is-burning',

    compendiums: [
        'murkwurst-is-burning.tables-murkwurst-is-burning',
        'murkwurst-is-burning.scenes-murkwurst-is-burning',
        'murkwurst-is-burning.journal-murkwurst-is-burning',
        'murkwurst-is-burning.actors-murkwurst-is-burning',
        'murkwurst-is-burning.items-murkwurst-is-burning',
        'murkwurst-is-burning.macros-murkwurst-is-burning',
        'morkborg-3p.macros-d100-items-and-trinkets',
        'morkborg-3p.macros-the-tenebrous-reliquary',
        'morkborg.creatures'
    ],

    permissions: [{
        type: 'Actor',
        name: 'The PCs',
        permission: CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
    }, {
        type: 'Scene',
        name: 'Murkwürst',
        permission: CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
    }],

    defaultScene: 'Murkwürst',

    dashboard: {
        actions: [{
            type: 'journal',
            icon: '/icons/svg/book.svg',
            data: 'Murkwürst is burning - Help'
        }, {
            type: 'macro',
            label: 'Rumor',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Rumors'
        }, {
            type: 'macro',
            label: 'Hex',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Village - Hex',
            scenes: ['The Village']
        }, {
            type: 'macro',
            label: 'House',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Village - Houses',
            scenes: ['The Village']
        }, {
            type: 'macro',
            label: 'Main Loot',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Village - Main Loot',
            scenes: ['The Village', 'The Duke’s Estate']
        }, {
            type: 'macro',
            label: 'Create Impassable',
            icon: '/icons/svg/wall-direction.svg',
            data: 'Murkwürst is burning - Village - Create impassable',
            scenes: ['The Village']
        }, {
            type: 'macro',
            label: 'Crypt - Room',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Crypt - Rooms',
            scenes: ['The Crypt']
        }, {
            type: 'macro',
            label: 'Crypt - Tomb Loot',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Crypt - Tomb Loot',
            scenes: ['The Crypt']
        }, {
            type: 'macro',
            label: 'Crypt - Reset',
            icon: '/icons/svg/d20.svg',
            data: 'Murkwürst is burning - Crypt Reset',
            scenes: ['The Crypt']
        }, {
            type: 'macro',
            label: 'd66 items you can find on a corpse',
            icon: '/icons/svg/d20.svg',
            data: 'd66 items you can find on a corpse'
        }, {
            type: 'macro',
            label: 'd100 Items and Trinkets',
            icon: '/icons/svg/d20.svg',
            data: 'd100 Items and Trinkets'
        }, {
            type: 'macro',
            label: 'The Tenebrous Reliquary',
            icon: '/icons/svg/d20.svg',
            data: 'The Tenebrous Reliquary'
        }, {
            type: 'macro',
            label: 'Reaction',
            icon: '/icons/svg/d20.svg',
            data: 'Reaction'
        }]
    }
};

export const getModuleName = () => configuration.name;
export const getDefaultScene = () => configuration.defaultScene;
export const getCurrentModule = () => configuration.module;
export const getCompendiumConfiguration = () => configuration.compendiums;
export const getPermissionConfiguration = () => configuration.permissions;
export const getDashboardConfiguration = () => configuration.dashboard;
