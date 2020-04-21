import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, BadgeType, IconColor } from './models/item-menu.model';

@Component({
  selector: 'app-sidebar',
  template: `
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a [routerLink]="['/dashboard']" class="brand-link">
      <img src="assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
        style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    <ng-scrollbar class="sidebar">
      <div class="side-menu">
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item" *ngFor="let item of menuItems"
              [ngClass]="{'nav-item': !item.isHeader, 'nav-header': item.isHeader, 'menu-open': item.menuOpen || rootPath.includes(item.rootPath), 'has-treeview': item.items}">
              <span *ngIf="item.isHeader">{{item.name}}</span>
              <a *ngIf="!item.isHeader" [routerLink]="item.routerLink" class="nav-link"
                [ngClass]="{'active': rootPath.includes(item.rootPath)}">
                <i class="nav-icon {{item.icon}} {{item.iconColor}}"></i>
                <p>{{item.name}} <i *ngIf="item.items && item.items.length > 0" class="right fas fa-angle-left"></i>
                  <span *ngIf="item.badge" class="right badge {{item.badgeType}} right">{{item.badge}}</span></p>
              </a>
              <ul class="nav nav-treeview" *ngIf="item.items && item.items.length > 0">
                <li class="nav-item" *ngFor="let subItem of item.items"
                  [ngClass]="{'has-treeview':(subItem.items && subItem.items.length > 0)}">
                  <a [routerLink]="subItem.routerLink" [routerLinkActive]="['active']" class="nav-link">
                    <i class="nav-icon {{subItem.icon}} {{subItem.iconColor}}"></i>
                    <p>{{subItem.name}} <i *ngIf="subItem.items && subItem.items.length > 0"
                        class="right fas fa-angle-left"></i>
                      <span *ngIf="subItem.badge" class="right badge {{subItem.badgeType}}">{{subItem.badge}}</span></p>
                  </a>
                  <ul class="nav nav-treeview" *ngIf="subItem.items && subItem.items.length > 0">
                    <li class="nav-item" *ngFor="let subSubItem of subItem.items">
                      <a [routerLink]="subSubItem.routerLink" [routerLinkActive]="['active']" class="nav-link">
                        <i class="nav-icon {{subSubItem.icon}} {{subSubItem.iconColor}}"></i>
                        <p>{{subSubItem.name}}
                          <span *ngIf="subSubItem.badge" class="right badge {{subSubItem.badgeType}}">{{subSubItem.badge}}</span></p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item" style="height: 70px;"></li>
          </ul>
        </nav>
      </div>
    </ng-scrollbar>
  </aside>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public rootPath: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rootPath = this.router.routerState.snapshot.url;
  }

  public menuItems: MenuItem[] = [
    {
      icon: 'fas fa-tachometer-alt',
      menuOpen: false,
      rootPath: 'dashboard',
      badge: '6',
      badgeType: BadgeType.INFO,
      name: 'Dashboard',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Dashboard v1',
          routerLink: ['/dashboard', 'v1']
        },
        {
          icon: 'far fa-circle',
          name: 'Dashboard v2',
          routerLink: ['/dashboard', 'v2']
        },
        {
          icon: 'far fa-circle',
          name: 'Dashboard v3',
          routerLink: ['/dashboard', 'v3']
        }
      ]
    },
    {
      icon: 'fas fa-th',
      badge: 'new',
      badgeType: BadgeType.DANGER,
      rootPath: 'widgets',
      name: 'Widgets',
      routerLink: ['/widgets']
    },
    {
      icon: 'fas fa-chart-pie',
      menuOpen: false,
      rootPath: 'charts',
      name: 'Charts',
      items: [
        {
          icon: 'far fa-circle',
          name: 'ChartJS',
          routerLink: ['/charts', 'chartJS']
        },
        {
          icon: 'far fa-circle',
          name: 'Flot',
          routerLink: ['/charts', 'flot']
        },
        {
          icon: 'far fa-circle',
          name: 'Inline',
          routerLink: ['/charts', 'inline']
        }
      ]
    },
    {
      icon: 'fas fa-tree',
      iconColor: IconColor.INFO,
      menuOpen: false,
      rootPath: 'uielements',
      name: 'UI Elements',
      items: [
        {
          icon: 'far fa-circle',
          iconColor: IconColor.DANGER,
          name: 'General',
          routerLink: ['/uielements', 'general']
        },
        {
          icon: 'far fa-circle',
          name: 'Icons',
          routerLink: ['/uielements', 'icons']
        },
        {
          icon: 'far fa-circle',
          name: 'Buttons',
          routerLink: ['/uielements', 'buttons']
        },
        {
          icon: 'far fa-circle',
          name: 'Sliders',
          routerLink: ['/uielements', 'sliders']
        },
        {
          icon: 'far fa-circle',
          name: 'Modals & Alerts',
          routerLink: ['/uielements', 'modals-alerts']
        },
        {
          icon: 'far fa-circle',
          name: 'Navbar & Tabs',
          routerLink: ['/uielements', 'navbar-tabs']
        },
        {
          icon: 'far fa-circle',
          name: 'Timeline',
          routerLink: ['/uielements', 'timeline']
        },
        {
          icon: 'far fa-circle',
          name: 'Ribbons',
          routerLink: ['/uielements', 'ribbons']
        }
      ]
    },
    {
      icon: 'fas fa-edit',
      menuOpen: false,
      rootPath: 'forms',
      name: 'Forms',
      items: [
        {
          icon: 'far fa-circle',
          name: 'General Elements',
          routerLink: ['/forms', 'general-elements']
        },
        {
          icon: 'far fa-circle',
          name: 'Advanced Elements',
          routerLink: ['/forms', 'advanced-elements']
        },
        {
          icon: 'far fa-circle',
          name: 'Editors',
          routerLink: ['/forms', 'editors']
        },
        {
          icon: 'far fa-circle',
          name: 'Validation',
          routerLink: ['/forms', 'validation']
        }
      ]
    },
    {
      icon: 'fas fa-table',
      iconColor: IconColor.WARNING,
      rootPath: 'tables',
      name: 'Tables',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Simple Tables',
          routerLink: ['/tables', 'simple-tables']
        },
        {
          icon: 'far fa-circle',
          name: 'DataTables',
          routerLink: ['/tables', 'datatables']
        },
        {
          icon: 'far fa-circle',
          name: 'jsGrid',
          routerLink: ['/tables', 'jsgrid']
        }
      ]
    },
    { isHeader: true, name: 'EXAMPLES' },
    {
      icon: 'far fa-calendar-alt',
      rootPath: 'calendar',
      name: 'Calendar',
      badge: '2',
      badgeType: BadgeType.INFO,
      routerLink: ['/calendar']
    },
    {
      icon: 'far fa-image',
      rootPath: 'gallery',
      name: 'Gallery',
      routerLink: ['/gallery']
    },
    {
      icon: 'far fa-envelope',
      rootPath: 'mailbox',
      name: 'Mailbox',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Inbox',
          routerLink: ['/mailbox', 'inbox']
        },
        {
          icon: 'far fa-circle',
          name: 'Compose',
          routerLink: ['/mailbox', 'compose']
        },
        {
          icon: 'far fa-circle',
          name: 'Read',
          routerLink: ['/mailbox', 'read']
        }
      ]
    },
    {
      icon: 'fas fa-book',
      rootPath: 'pages',
      name: 'Pages',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Invoice',
          routerLink: ['/pages', 'invoice']
        },
        {
          icon: 'far fa-circle',
          name: 'Profile',
          routerLink: ['/pages', 'profile']
        },
        {
          icon: 'far fa-circle',
          name: 'E-commerce',
          routerLink: ['/pages', 'ecommerce']
        },
        {
          icon: 'far fa-circle',
          name: 'Projects',
          routerLink: ['/pages', 'projects']
        },
        {
          icon: 'far fa-circle',
          name: 'Project Add',
          routerLink: ['/pages', 'project-add']
        },
        {
          icon: 'far fa-circle',
          name: 'Project Edit',
          routerLink: ['/pages', 'project-edit']
        },
        {
          icon: 'far fa-circle',
          name: 'Project Detail',
          routerLink: ['/pages', 'project-detail']
        },
        {
          icon: 'far fa-circle',
          name: 'Contacts',
          routerLink: ['/pages', 'contacts']
        }
      ]
    },
    {
      icon: 'far fa-plus-square',
      rootPath: 'extras',
      name: 'Extras',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Login',
          routerLink: ['/extras', 'login']
        },
        {
          icon: 'far fa-circle',
          name: 'Register',
          routerLink: ['/extras', 'register']
        },
        {
          icon: 'far fa-circle',
          name: 'Forgot Password',
          routerLink: ['/extras', 'forgot-password']
        },
        {
          icon: 'far fa-circle',
          name: 'Recover Password',
          routerLink: ['/extras', 'recover-password']
        },
        {
          icon: 'far fa-circle',
          name: 'Lockscreen',
          routerLink: ['/extras', 'lockscreen']
        },
        {
          icon: 'far fa-circle',
          name: 'Legacy User Menu',
          routerLink: ['/extras', 'legacy-user-menu']
        },
        {
          icon: 'far fa-circle',
          name: 'Language Menu',
          routerLink: ['/extras', 'language-menu']
        },
        {
          icon: 'far fa-circle',
          name: 'Error 404',
          routerLink: ['/core', '404']
        },
        {
          icon: 'far fa-circle',
          name: 'Error 500',
          routerLink: ['/core', '500']
        },
        {
          icon: 'far fa-circle',
          name: 'Pace',
          routerLink: ['/extras', 'pace']
        },
        {
          icon: 'far fa-circle',
          name: 'Blank Page',
          routerLink: ['/extras', 'blank-page']
        },
        {
          icon: 'far fa-circle',
          name: 'Starter Page',
          routerLink: ['/extras', 'starter-page']
        }
      ]
    },
    { isHeader: true, name: 'MISCELLANEOUS' },
    {
      icon: 'fas fa-file',
      rootPath: 'documentation',
      name: 'Documentation'
    },
    { isHeader: true, name: 'MULTI LEVEL EXAMPLE' },
    {
      icon: 'far fas fa-circle',
      rootPath: 'level1',
      name: 'Level 1'
    },
    {
      icon: 'far fas fa-circle',
      rootPath: 'level1',
      name: 'Level 1',
      items: [
        {
          icon: 'far fa-circle',
          name: 'Level 2',
          routerLink: ['/level1', 'level2']
        },
        {
          icon: 'far fa-circle',
          name: 'Level 2',
          items: [
            {
              icon: 'far fa-dot-circle',
              name: 'Level 3',
              routerLink: ['/level1', '/level2', 'level3']
            },
            {
              icon: 'far fa-dot-circle',
              name: 'Level 3',
              routerLink: ['/level1', '/level2', 'level3']
            }
          ]
        }
      ]
    },
    { isHeader: true, name: 'LABELS' },
    {
      icon: 'far fa-circle',
      iconColor: IconColor.DANGER,
      rootPath: 'important',
      name: 'Important'
    },
    {
      icon: 'far fa-circle',
      iconColor: IconColor.WARNING,
      rootPath: 'warning',
      name: 'Warning'
    },
    {
      icon: 'far fa-circle',
      iconColor: IconColor.INFO,
      rootPath: 'informational',
      name: 'Informational'
    }
  ];

}
