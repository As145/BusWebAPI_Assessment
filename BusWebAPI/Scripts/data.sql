SET IDENTITY_INSERT [dbo].[Buses] ON 
GO
INSERT [dbo].[Buses] ([Id], [Source], [Destination], [Rate], [Type]) VALUES (1, N'Auckland', N'Wellington', 155.56, N'Normal')
GO
INSERT [dbo].[Buses] ([Id], [Source], [Destination], [Rate], [Type]) VALUES (2, N'Wellington', N'Hamilton', 255.56, N'Deluxe')
GO
INSERT [dbo].[Buses] ([Id], [Source], [Destination], [Rate], [Type]) VALUES (3, N'Wellington', N'Tauranga', 355.56, N'Volvo')
GO
INSERT [dbo].[Buses] ([Id], [Source], [Destination], [Rate], [Type]) VALUES (4, N'Tauranga', N'Dunedin', 145.56, N'Normal')
GO
INSERT [dbo].[Buses] ([Id], [Source], [Destination], [Rate], [Type]) VALUES (5, N'Tauranga', N'Christchurch', 355.56, N'Volvo')
GO
SET IDENTITY_INSERT [dbo].[Buses] OFF
GO