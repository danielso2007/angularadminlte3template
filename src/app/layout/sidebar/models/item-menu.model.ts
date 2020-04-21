enum BadgeType {
    DANGER = 'badge-danger',
    PRIMARY = 'badge-primary',
    SECONDARY = 'badge-secondary',
    SUCCESS = 'badge-success',
    INFO = 'badge-info',
    WARNING = 'badge-warning',
    LIGHT = 'badge-light'
}

enum IconColor {
    DANGER = 'text-danger',
    WARNING = 'text-warning',
    INFO = 'text-info',
    DEFAULT = 'text-default'
}

interface MenuItem {
    isHeader?: boolean,
    icon?: String,
    iconColor?: IconColor,
    menuOpen?: boolean,
    rootPath?: String,
    name: String,
    routerLink?: String[],
    badge?: String,
    badgeType?: BadgeType,
    inactive?: boolean,
    items?: MenuItem[]
}

export {MenuItem, BadgeType, IconColor};