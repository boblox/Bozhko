using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Site.Helpers
{
    public static class Consts
    {
        public static class HomeDocType
        {
            public static string Alias = "Home";
            public static string NewsOverview = "Home";
        }
        public static class NewsOverviewDocType
        {
            public static string Alias = "NewsOverview";
        }
        public static class NewsItemDocType
        {
            public static string Alias = "NewsItem";
            public static string TitleProperty = "Title";
            public static string ImageProperty = "Image";
        }

        public static class GalleryCategoryDocType
        {
            public static string Alias = "GalleryCategory";
        }

        public static class GalleryDocType
        {
            public static string Alias = "Gallery";
            public static string CategoryProperty = "Category";
            public static string ImagesProperty = "Images";
        }

        public static class DataTypes
        {
            public static string ImageCategory = "Image Category";
        }

        public static class MediaTypes
        {
            public static string Image = "Image";
            public static string Folder = "Folder";
            public static string File = "File";
        }
    }
}