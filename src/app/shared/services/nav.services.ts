/* eslint-disable linebreak-style */
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

// Menu
export interface Menu {
titledescription: any;
menutitle: any;
bgcolor: any;
	headTitle?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeValue?: string;
	badgeClass? :string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
	Menusub?: boolean;
	target?:boolean;
  selected?: boolean;
  items?: any;
}
export interface Dropdown {
  titledescription: any;
  menutitle: any;
  bgcolor: any;
    headTitle?: string,
    headTitle2?: string,
    path?: string;
    title?: string;
    icon?: string;
    menuicon?: string;
    type?: string;
    badgeValue?: string;
    badgeClass? :string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
    Menusub?: boolean;
    target?:boolean;
    selected?: boolean;
    items1? : any;
  }

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search = false;

	// Language
	public language = false;

	// Mega Menu
	// public megaMenu: boolean = false;
	// public levelMenu: boolean = false;
	// public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
// eslint-disable-next-line linebreak-style

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen = false;
  items1: any;
  sanitizer: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

  MENUITEMS: any = [

    {
      title: "Les diagnostics",
      type: "mega-slide",
      active: false,
      selected: false,
            Menusub: true,
      children: [
       
        {
          children: [
            {
              menuicon: "bi-palette",
              menutitle: "Les diagnostics",
              path: '/pages/faqs',
              icon: "bi-tags",
              type: "mega-menu",
              active: false,
              selected: false,
              bgcolor: "purple",
              bgcolor1: "purple",
              badge: "danger",
              title: "Vente-Location",
              titledescription: "Enhance the look and feel of your website. Select from a wide range of themes and templates for the web's top CMS platforms.",
              title1:"New",
            },
            {
              icon: "bi-wrench",
              type: "mega-menu",
              path: '/pages/blog',
              active: false,
              selected: false,
              bgcolor: "danger",
              bgcolor1: "danger",
              title: "Travaux-Renovation",
              titledescription: "Download plugins and scripts to add extra functionality to your website.",
            },
            {
              icon: "bi-droplet",
              type: "mega-menu",
              path: '/pages/assainissement',
              active: false,
              selected: false,
              bgcolor: "info",
              bgcolor1: "info",
              title: "Assainissement",
              titledescription: "Choose a customizable template and design a professional looking logo in minutes.",
            },
          ],
        },
      ],
    },
    {
      menutitle: "A propos de nous",
      type: "link",
      path:'/pages/aboutus',
      active: false,
      selected: false,
 
},
    /////
    {
      menutitle: "Contact",
      type: "link",
      path:'/pages/contact-us',
      active: false,
      selected: false,
    
    },

//
    // {
    //   title: "Pages",
    //   type: "sub",
    //   active: false,
    //   selected: false,
    //   children: [
    //     {
    //       path: `/pages/aboutus`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "bi-house",
    //       title: "Aboutus",
    //     },
    //     {
    //       path: `/pages/blog`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: " bi-box",
    //       title: "Blog",
    //     },
    //     {
    //       path: `/pages/blog-details`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: " bi-activity",
    //       title: "Blog Details",
    //     },
    //     {
    //       path: `/pages/contact-us`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "  bi-telephone",
    //       title: "Contact Us",
    //     },
    //     {
    //       path: `/pages/faqs`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "  bi-question",
    //       title: "FAQ's",
    //     },
    //     {
    //       path: '/switcher-one-route',
    //       icon: " bi-gear",
    //       title: 'Switcher',
    //       type: 'link',

    //     },

    //     {
    //       path: `/pages/forgot-password`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon:"bi bi-shield-lock",
    //       title: "Forgot Password",
    //     },

    //     {
    //       path: `/pages/login-style1`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: " bi-lock",
    //       title: "loginsyle",
    //     },
    //     {
    //       path: `/custom-pages/login-style2`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "bi bi-shield-check",
    //       title: "loginsyle2",
    //     },
    //     {
    //       path: `/pages/registration-style1`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "bi bi-layers",
    //       title: "Registerstyle",
    //     },
    //     {
    //       path: `/custom-pages/registration-style2`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "bi bi-box-seam",
    //       title: "Registerstyle2",
    //     },
    //     {
    //       path: `/custom-pages/under-maintainance`,
    //       type: "link",
    //       active: false,
    //       selected: false,
    //       icon: "bi bi-gear-wide-connected",
    //       title: "Under Maintainance",
    //     },

    //   ],
    // },

    // {
    //   title: "custom Pages",
    //   type: "sub",
    //   active: false,
    //   selected: false,
    //   children: [

    //   ],
    // },
   

  ];
  

	// Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  dropdownItems: any = [
    {
      title: "Web Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"cast tx-17",
      children: [
        {
          path: '/hosting/linux-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          title: "Linux Shared Hosting",
        },
        {
          path:'/hosting/windows-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-sliders",
          title: "Windows Shared Hosting",
        },
        {
          path: '/hosting/wordpress-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-camera-video",
          title: "Wordpress Shared Hosting",
        },
      ],
    },
    ///////////2459
    {
      title: "Domains",
      type: "sub",
      active: false,
      selected: false,
   icon:"globe tx-17",

      children: [
            {
              menutitle: "Registration",
              menutitleicons: "bi-journal-text",
              path: '/domains/register-a-domain',
              icon: "bi-hdd-stack",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "secondary",
              title: "Register a Domain",
              titledescription: "Book your domain here",
            },
            {
              path: '/domains/new-domain-extensions',
              icon: "bi-hdd-stack",
              type: "link",
              bgcolor: "success",
              active: false,
              selected: false,
              title: "New Domain Extensions",
              titledescription: "pr-erigester to new domain extensions",
            },
            {
              path: '/domains/premium-domains',
              icon: "bi-hdd-stack",
              type: "link",
              bgcolor: "purple",
              active: false,
              selected: false,
              title: "Preminum Domains ",
              titledescription: "rigester catched new name",
            },

      ],
    },
    //////end

    ///////

    ///////
    {
      title: "Reseller Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"layers tx-17",
      children: [
        {
          path: '/hosting/linux-reseller-hosting',
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Linux Reseller Hosting",

        },
        {
          path: "/hosting/windows-reseller-hosting",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Windows Reseller Hosting",

        },
      ],
    },
    {
      title: "Cloud Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"clouds tx-17",
      children: [
        {
          path: '/cloud/cloud',
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Cloud Hosting",

        },
        {
          path: "/cloud/professional-cloud",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Professional Cloud Hosting",

        },
      ],
    },
    {
      title: "Servers",
      type: "sub",
      active: false,
      selected: false,
      icon:"hdd-network tx-17",
      children: [
        {
          path: "/hosting/linux-kvm-vps",
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Linux KVM VPS",

        },
        {
          path: "/hosting/dedicated-servers",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Dedicated Servers",

        },
        {
          path: "/hosting/windows-dedicated-servers",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Windows Dedicated Servers",

        },
      ],
    },
    {
      title: "Email & Productivity",
      type: "sub",
      active: false,
      selected: false,
      icon:"envelope-plus",
      children: [
        {
          path: '/email-productivity/business-email',
          type: "link",
          active: false,
          selected: false,
          bgcolor: "warning",
          title: "Buisness Email",

        },
        {
          path: '/email-productivity/enterprise-email',
          type: "link",
          active: false,
          selected: false,
          icon:"envelope-plus tx-17",
          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Enterprise Email",

        },
        {
          path:'/email-productivity/google-workspace',
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Google Workspace",

        },
      ],
    },

    /////
    {
      title: "Security",
      type: "sub",
      active: false,
      selected: false,
      icon:"shield-check tx-17",
      children: [
        {
          path: `/security/ssl-certificates`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          // title: "Home",
          bgcolor: "warning",
          title: "SSL Certificates",
          titledescription:
            "Power your business with Cloud. 2x faster and 4x scalable.",
        },
        {
          path: `/security/sitelock`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          bgcolor: "purple",
          title: "SiteLock",
          titledescription: "Site lock",
        },
        {
          path: `/security/codegaurd-website-backup`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          bgcolor: "teal",
          title: "Codegaurd Website Backup",
          titledescription: "codeguradwebsitebackup",
        },
      ],
    },

  ];
  items2 = new BehaviorSubject<Dropdown[]>(this.dropdownItems);

}
