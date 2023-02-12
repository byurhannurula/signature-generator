import React from 'react';

export const Dashboard = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={` ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const User = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export const UserAdd = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    />
  </svg>
);

export const UserRemove = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
    />
  </svg>
);

export const Users = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export const UserGroup = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export const Pencil = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

export const Folder = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

export const FolderOpen = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
    />
  </svg>
);

export const FolderCreate = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    />
  </svg>
);

export const FolderDownload = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    />
  </svg>
);

export const Archive = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

export const Trash = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

export const Settings = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const Settings2 = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

export const Search = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const Refresh = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

export const Share = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

export const Display = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export const Menu = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M4 8h16M4 16h16"
    />
  </svg>
);

export const Cross = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const Plus = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

export const CrossCircle = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const Check = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export const CheckCircle = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const DotsVertical = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
);

export const Bell = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    stroke={stroke}
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

export const Calendar = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    stroke={stroke}
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const Document = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export const Clipboard = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

export const ExternalLink = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export const ChevronLeft = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const ChevronDoubleLeft = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />
  </svg>
);

export const ChevronRight = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const ChevronDoubleRight = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

export const ChevronUp = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

export const ChevronDown = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const Sort = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
    </svg>
  );
};

export const SortUp = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
    </svg>
  );
};

export const SortDown = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
    </svg>
  );
};

export const Logout = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

export const Upload = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>
);

export const CloudUpload = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

export const Download = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

export const Loader = ({
  width = '64px',
  height = '64px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    stroke={stroke}
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M64 9.75A54.25 54.25 0 009.75 64H0a64 64 0 01128 0h-9.75A54.25 54.25 0 0064 9.75z" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 64 64"
        to="360 64 64"
        dur="1200ms"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export const Ban = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  </svg>
);

export const Play = ({
  width = '24px',
  height = '24px',
  stroke = 'currentColor',
  className = '',
  fill = 'none',
  ...restProps
}) => (
  <svg
    {...restProps}
    className={`h-5 w-5 ${className}`}
    fill={fill}
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      fill={fill}
      stroke={stroke}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
