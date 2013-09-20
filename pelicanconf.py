#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Bo Yu'
SITENAME = u'Bo Yu'
SITEURL = ''

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'

ARTICLE_URL = 'article/{slug}/'
ARTICLE_SAVE_AS = 'article/{slug}/index.html'
PAGE_URL = '{category}/{slug}/'
PAGE_SAVE_AS = '{category}/{slug}/index.html'
AUTHOR_URL = False
AUTHOR_SAVE_AS = False
CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'

DIRECT_TEMPLATES = ('index', 'tags', 'categories', 'archives')
TAGS_SAVE_AS = 'tags/index.html'
CATEGORIES_SAVE_AS = 'categories/index.html'
ARCHIVES_SAVE_AS = 'archives/index.html'

TYPOGRIFY = True
# THEME = "notmyidea"
THEME = "themes/light-roast"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS =  (('Pelican', 'http://getpelican.com/'),
          ('Python.org', 'http://python.org/'),
          ('Jinja2', 'http://jinja.pocoo.org/'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

